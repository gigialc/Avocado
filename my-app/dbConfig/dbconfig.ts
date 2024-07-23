import mongoose from 'mongoose';

export async function connectToMongoDB() {
	console.log('Connecting to MongoDB...');
	console.log('process.env.MONGO_URI', process.env.MONGO_URI);
	try {
		mongoose.connect(process.env.MONGO_URI!);
		const connection = mongoose.connection;

		connection.on('connected', () => {
			console.log('Great! MongoDb is connected girl!');
		});

		connection.on('error', (err) => {
			console.log('MongoDB connected ERROR. ' + err);
			process.exit();
		});
	} catch (error) {
		console.log('Ups! Something went wrong! ' + error);
	}
}