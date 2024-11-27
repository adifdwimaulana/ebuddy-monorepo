# EBuddy Express + Firebase

This project contains REST API that deployed in Firebase Functions. Tech stack used:

- Express
- Typescript
- Firebase Auth
- Firebase Database (Firestore)
- Firebase Functions

## How to run

1. Clone this repository
2. Go to directory
3. Run `npm install`
4. Run `npm run start`

It will automatically print this in terminal

```
> backend-repo@1.0.0 start
> npm run build && firebase emulators:start

> backend-repo@1.0.0 build
> tsc && tsc-alias

i  emulators: Starting emulators: auth, functions, firestore, extensions
⚠  emulators: It seems that you are running multiple instances of the emulator suite for project e-buddy-monorepo. This may result in unexpected behavior.
⚠  functions: The following emulators are not running, calls to these services from the Functions emulator will affect production: apphosting, database, hosting, pubsub, storage, dataconnect
i  firestore: Firestore Emulator logging to firestore-debug.log
✔  firestore: Firestore Emulator UI websocket is running on 9150.
i  functions: Watching "/Users/adifdwimaulana/Documents/Adif/temp/ebuddy/backend-repo" for Cloud Functions...
✔  functions: Using node@18 from host.
i  functions: Loaded environment variables from .env.
Serving at port 8467

[server]: Server is running at http://localhost:3000

✔  functions: Loaded functions definitions from source: app.
✔  functions[us-central1-app]: http function initialized (http://127.0.0.1:5001/e-buddy-monorepo/us-central1/app).

┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000/               │
└─────────────────────────────────────────────────────────────┘

┌────────────────┬────────────────┬──────────────────────────────────┐
│ Emulator       │ Host:Port      │ View in Emulator UI              │
├────────────────┼────────────────┼──────────────────────────────────┤
│ Authentication │ 127.0.0.1:9099 │ http://127.0.0.1:4000/auth       │
├────────────────┼────────────────┼──────────────────────────────────┤
│ Functions      │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions  │
├────────────────┼────────────────┼──────────────────────────────────┤
│ Firestore      │ 127.0.0.1:8080 │ http://127.0.0.1:4000/firestore  │
├────────────────┼────────────────┼──────────────────────────────────┤
│ Extensions     │ 127.0.0.1:5001 │ http://127.0.0.1:4000/extensions │
└────────────────┴────────────────┴──────────────────────────────────┘
  Emulator Hub running at 127.0.0.1:4400
  Other reserved ports: 4500, 9150
┌─────────────────────────┬───────────────┬─────────────────────┐
│ Extension Instance Name │ Extension Ref │ View in Emulator UI │
└─────────────────────────┴───────────────┴─────────────────────┘
Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.
```

## API Endpoint

- Register User `/register-user`
- Get User `/fetch-user-data`
- Update User `/update-user-data`
