import React from 'react';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Amplify, Auth } from 'aws-amplify';

function Display_User(props) {

    const [userName, setUserDetails] = React.useState("");
    const [userData, setUserData] = React.useState("");
    const [isLoading, setLoading] = React.useState(true);
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        setUserDetails(user.username);
        setUserData(user.attributes.email);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  
    if(isLoading) {
      return <div>Loading...</div>
    }

    return(
        <div className= "Userdisplay">
        <View className="App">
            <Heading level={3} className="text-area">{userName} is currently signed in</Heading>
          <Button className="signout-btn" onClick={props.signOut}>Sign Out</Button>
        </View>
      </div>
    )


}

export default Display_User;