# What is Flock?
Flock is a mock mass email service created for a university assignment. 

## Tech stack
We used React in the Front end and asp.net core connected with a mysql database in the backend 

## Installation
```bash
git clone https://github.com/dyka3773/Flock.git your_file_name
```
Then navigate to the ClientApp and run to install all the node packages
```bash
npm install
```

## Usage / Features
* **Account Management**: You can sign up with your unique info, log in with your account and manage your contacts, campaigns and groups.
*  **Contact Management**: 
    * Adding: After creating a new account and signing in you can add contacts either one by one on the contact management page or by mass importing from csv.
    * Editing: In the contact management page you can edit each contacts details individually
    * Deleting: In the contact management page you can mass delete any ammount of your contacts.
*  **Campaign Management**: 
    * Adding: After creating a new account and signing in you can add Campaigns on the Campaigns management page
    * Editing: In the Campaigns management page you can edit each Campaigns details individually
    * Deleting: In the Campaigns management page you can mass delete any ammount of your Campaigns.
*  **Categorization**: 
    * Groups: You can manage your contacts and your campaigns using groups. Each contact can be assigned to one or more groups. Each campaign can be added to one group. Thus, you can send your campaigns to a large ammount of contacts based on their group.
    * Editing/Deleting: In the contact/campaign management pages you can add or delete any of your Groups.

## The team
* Project Manager
    *   Κωνσταντίνος Κοντός
    
* UX/Desinger/Tester
    * Θάνος Ψαρράς
    * Κωνσταντίνος Κοντός

* Front-End Developer
    * Στέφανος Τουφεξής

* Back-End Developer
    * Ηρακλής Κόνσούλας
    * Στέφανος Τουφεξής
    * Στράτος Σκαρλάτος
    * Θάνος Ψαρράς

## Front end docs
To view the documentation of the components used in the UI, do the following:
* Navigate to `ClientApp` in a terminal. 
* Then run ```bash npx styleguidist server``` 
* Then navigate to `http://localhost:6060/` in a browser

To build the docs as a seperate package 
* Navigate to `ClientApp` in a terminal. 
* Then run `npx styleguidist build`

For more info see: https://react-styleguidist.js.org/docs/getting-started

##### A note from the front end developer:
> At the time i hadnt looked into any state management technology and didnt have enough time to invest in educating myself with one of them. As such, the state management in the project is a bit messy and complicated. We hope to intergrate Redux with our front end some time in the near future.

## Contributing
Pull requests are welcome. 

## License
[MIT](https://choosealicense.com/licenses/mit/)

