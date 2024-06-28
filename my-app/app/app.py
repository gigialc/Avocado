import streamlit as st
import requests
from io import StringIO
import difflib
import re
from nltk.tokenize import sent_tokenize
import nltk
import fitz  # PyMuPDF

nltk.download('punkt', quiet=True)

def get_text_from_url(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        st.error(f"Error fetching URL: {e}")
        return None

def get_text_from_file(file):
    return StringIO(file.getvalue().decode("utf-8")).read()

def get_text_from_pdf(file):
    doc = fitz.open(stream=file.read(), filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def parse_references(text):
    references = []
    current_ref = ""
    for line in text.split('\n'):
        if re.match(r'^\d+\.', line):
            if current_ref:
                references.append(current_ref.strip())
            current_ref = line
        else:
            current_ref += " " + line.strip()
    if current_ref:
        references.append(current_ref.strip())
    return references

def check_content_against_references(references, content):
    results = []
    content_sentences = sent_tokenize(content)
    
    for i, content_sent in enumerate(content_sentences):
        max_similarity = 0
        most_similar_ref_sent = ""
        ref_number = 0
        for j, ref in enumerate(references, 1):
            ref_sentences = sent_tokenize(ref)
            for ref_sent in ref_sentences:
                similarity = difflib.SequenceMatcher(None, content_sent, ref_sent).ratio()
                if similarity > max_similarity:
                    max_similarity = similarity
                    most_similar_ref_sent = ref_sent
                    ref_number = j
        
        interpretation = "Accurate" if max_similarity > 0.8 else "Potential misinterpretation"
        results.append({
            "sentence_index": i,
            "reference_number": ref_number,
            "content_sentence": content_sent,
            "reference_sentence": most_similar_ref_sent,
            "similarity": max_similarity,
            "interpretation": interpretation
        })
    
    return results

def highlight_content(content, results):
    highlighted_content = content
    for result in sorted(results, key=lambda x: x['sentence_index'], reverse=True):
        sentence = result['content_sentence']
        if result['interpretation'] == "Potential misinterpretation":
            highlighted_sentence = f"<span style='background-color: #FFCCCB'>{sentence}</span>"
        else:
            highlighted_sentence = f"<span style='background-color: #90EE90'>{sentence}</span>"
        highlighted_content = highlighted_content.replace(sentence, highlighted_sentence)
    return highlighted_content

def display_results(results, highlighted_content):
    st.subheader("Highlighted Content")
    st.markdown(highlighted_content, unsafe_allow_html=True)
    st.markdown("Green: Accurate representation | Red: Potential misinterpretation")
    
    st.subheader("Detailed Fact-Checking Results")
    for result in results:
        st.markdown(f"**Reference {result['reference_number']}**")
        st.write(f"Content: {result['content_sentence']}")
        st.write(f"Reference: {result['reference_sentence']}")
        st.write(f"Similarity: {result['similarity']:.2f}")
        if result['interpretation'] == "Accurate":
            st.markdown(f"Interpretation: <span style='color: green;'>{result['interpretation']}</span>", unsafe_allow_html=True)
        else:
            st.markdown(f"Interpretation: <span style='color: red;'>{result['interpretation']}</span>", unsafe_allow_html=True)
        st.write("---")

st.title("Medical Content Fact-Checking App")

st.header("Reference Documents")
reference_option = st.radio("Choose input method for references:", ["Upload File", "Copy-Paste Text", "Paste URL"])

reference_text = ""  # Initialize reference_text

if reference_option == "Upload File":
    reference_file = st.file_uploader("Upload reference file", type=["txt", "pdf"])
    if reference_file:
        if reference_file.type == "application/pdf":
            reference_text = get_text_from_pdf(reference_file)
        else:
            reference_text = get_text_from_file(reference_file)
elif reference_option == "Copy-Paste Text":
    reference_text = st.text_area("Paste reference text here:")
else:
    reference_url = st.text_input("Enter reference URL:")
    if reference_url:
        reference_text = get_text_from_url(reference_url)

if reference_text:
    references = parse_references(reference_text)
    st.write(f"Number of references found: {len(references)}")

st.header("Content to Fact-Check")
content_option = st.radio("Choose input method for content:", ["Upload File", "Copy-Paste Text"])

content_text = ""  # Initialize content_text

if content_option == "Upload File":
    content_file = st.file_uploader("Upload content file", type=["txt", "pdf"])
    if content_file:
        if content_file.type == "application/pdf":
            content_text = get_text_from_pdf(content_file)
        else:
            content_text = get_text_from_file(content_file)
else:
    content_text = st.text_area("Paste content text here:")

if st.button("Fact-Check Content") and references and content_text:
    results = check_content_against_references(references, content_text)
    highlighted_content = highlight_content(content_text, results)
    display_results(results, highlighted_content)

st.sidebar.markdown("""
## How to use this Medical Fact-Checking App:
1. Input the reference documents (multiple references supported).
2. Input the content to be fact-checked.
3. Click 'Fact-Check Content' to analyze the content against the references.
4. Review the highlighted content and detailed results to identify accurate representations and potential misinterpretations.

**Note**: 
- Green highlights indicate accurate representation.
- Red highlights indicate potential misinterpretation or content that needs review.
- The app compares each sentence in the content against the references to identify potential issues.
""")
