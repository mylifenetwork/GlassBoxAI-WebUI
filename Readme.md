# GlassboxAI

## Web UI with React Native

### Initialization 
- Install Expo Go App in your native device 
- clone the repository 
- open the project in Visual Studio Code
- run **npm install** in the terminal to install all the dependecies 
- run **npm start** to start the development server

This app is created using Expo CLI (not react native CLI). Therefore, the project does not make use of andriod studio, instead the application can be viewd using the Expo Go app that has been installed in the native device. 

After running npm start, a QR code will be shown in the terminal. Scan the QR code using the expo Go App. The App will be displayed on the native device. Any changes made during the code will be automaically synced to the native device upon saving the changes in the code editor. 


### Folder strucuture
1. assets
- this contains static resources such as icons files, images. 
2. components
- This folder contains all the components rendered in the application. This folder also consists of custom and reuseable elements such as  Buttons, radio buttons etc. 
3. http
- This contains the HTTP methods and functions created using axios library. All the http request methods have been configured in this folder
4. screens
- Different screens rendered during the application navigation are set up in this folder. React navigation including stack navigation and bottoms tab navigation has been set up to create navigation in the project. 
5. styles
- constants styling variables have been defined in files inside this folder for example, colors to be used etc. 
6. util
- this folder contains files for validation and performing side effect functionalities. 

### Application Flow 

App.js file containes tha root navigation components. By default the Home.js file is initially rendered that allows new users to signup using SignUpForm Screen. The returning users are directed to login screen where they input their phone number and car license number to login.

LoginForm and SignUpForm screens make use of reusable form input components which have been created and styled in the components folder. Validation for form inputs has been provided in the util folder validation files. 

SignUpOTP component has been created and coded using reuseable components in the component folder. The OTP generation is linked to the firebase andriod project. OTP authentication will finalized the storage of the new user input data. 

Successful login authentication of the user will render the welcome screen component that shows the user profile, journey data and the account detail information of the user. 

