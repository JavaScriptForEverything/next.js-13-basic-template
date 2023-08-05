## Next.js-13 Basic Setups


##### Basic Commands and Environment Valirables

- Commands
```
	$ sudo systemctl start mongodb 		: Start Database

	$ pnpm install 			 	: Install all required Packages

	$ pnpm dev 			 	: Run as for Dev

	$ pnpm build 			
	$ pnpm start 				: Run as for Production
```

- Environment Variables
```
# DATABASE: MongoDB
MONGODB_PASSWORD='secret'
MONGODB_LOCAL_URI='mongodb://localhost:27017/bebaha'
MONGODB_REMOTE_URI='mongodb+srv://javascriptforeverything:${MONGODB_PASSWORD}@cluster0.fgnadzs.mongodb.net/?retryWrites=true&w=majority'



# Next-Auth
NEXTAUTH_SECRET='secret' 	                : # crypto.randomUUID()
# NEXTAUTH_URL='http://localhost:3000' 		: # If enable this variable it throw Error: Unauthorize, Blocked...

GOOGLE_CLIENT_ID='secret'
GOOGLE_CLIENT_SECRET='secret'

FACEBOOK_CLIENT_ID='secret'
FACEBOOK_CLIENT_SECRET='secret'
```

##### Packge Manger used `pnpm` so the command will be
`
	$ pnpm install
	$ pnpm dev
	$ pnpm build
	$ pnpm start
`

### Features Boilerplate

- Redux Toolkit
- Material UI Customization
- Database: Mongodb (Mongoose)
- Creating HTML Form Dynamically
- Sending File To backend in multiple way
- Next-Auth


##### Redux in Next.js v13

- Redux Toolkit
	- Server-Side Dispatch
	- Client-Side Dispatch
	- Passing Store Between Server Components
	- Share Redux Store from Server Component to Client Component
	- Handling Asynchnous Function with createAsyncThunk 


##### Material UI

- Material UI Customization
	- Custom Component 
	- Theme Customization
		-	Palette
		-	Breakpoints


##### Database

- Database: Mongodb (Mongoose)
	- Mongoose + Typescript


##### Dynamic Form

- Creating HTML Form Dynamically
	- Create Form by ArrayObject
	- Create Form Nexted Object 	(Properly)


##### Sending Files to Backend, And Handle File in Backend

- Sending File To backend in multiple way
	- Sending Data in 2 Methods:
		- By HTML Form
		- By JavaScript AJAX Event

	- Sending Data in 3 ways:
		- application/json
		- multipart/form-data
		- application/x-www-form-urlencoded

	- Sending File in 2 ways and Same them as a File: `Image`, `Text`, `JSON`, ...:
		- As Base64 dataURL by `application/json`
		- As Raw Binary File (BLOB) by `multipart/form-data`



##### Next-Auth

- Next-Auth
	- credentails
	- Google, Github, Facebook

