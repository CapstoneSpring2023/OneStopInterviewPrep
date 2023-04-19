import React, { useEffect, useState } from "react";
import loadingGif from "../../images/loading.gif";
import { API } from 'aws-amplify';
import { listURLCompanies} from '../../graphql/queries';


function LeetCodeURL(){
    const [urls, setUrls] = useState(null);
    var thisCompany = localStorage.getItem("this-company");
    /*Need to add an additional filter to check type */
    const input_variables = {
        filter:{
            companyId: 
            {
                eq: thisCompany
            }
        }
    };

    useEffect(() => {
        // List all items
        API.graphql({
            query: listURLCompanies, variables:input_variables
        }).then(response => {
            let urlArr1 = response.data.listURLCompanies.items
            setUrls(urlArr1);
        }).catch(error => {
       console.log("Error in LeetCodeURL.js, inside graphql query: ", error)
     });
    },[]);



    if(urls == null ){
        return(
            <div>
                <img src={loadingGif} alt="wait until the page loads"/>
            </div>
        )
    } else {
        var urlArr = new Array();
        /*the down vote and up votes dont display properly on some company pages */
        urls.map( Obj=> {
            var urlObj = Obj.uRL;
            if(urlObj.source == 3){
                console.log("inserting these objects to the array: ", urlObj.title)
                urlArr.push(
                    (
                        <li><a href={urlObj.url}>{urlObj.title}</a></li>
                    )
                )                
            }

        });
        
        return(
            <div>
                {urlArr}
            </div>
        )
    }

}

export default LeetCodeURL;