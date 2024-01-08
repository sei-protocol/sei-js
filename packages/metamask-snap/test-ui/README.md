# Sei MetaMask Snap Testing Site

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Configuration
#### Snap Origin 
- Change between the local snap server and using a published npm build by setting the  `VITE_SNAP_ID` environment variable in `.env.local` to your snaps origin (`local:http://localhost:8080` for local, `npm:@sei-js/metamask-snap` for the latest published npm version)
