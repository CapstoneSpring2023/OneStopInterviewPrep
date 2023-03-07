import React, { useEffect, useState } from "react";
import loadingGif from "../../images/loading.gif";
import { API } from 'aws-amplify';
import { listURLS, getURLCompany, listURLCompanies} from '../../graphql/queries';


function LeetCodeURL(){
    const [urls, setUrls] = useState(null);
    const[compUrlId, setcompUrlId] = useState(null);
    var thisCompany = localStorage.getItem("this-company");
    
    const variables1 = {
        filter:{
            companyId: 
            {
                eq: thisCompany
            },
            // type: {
            //     eq: 1
            // }
        }
    };

    console.log(
        API.graphql({
            query: listURLCompanies, variables: variables1
        })
    );
    useEffect(() => {
        // List all items
        API.graphql({
            query: listURLCompanies, variables: variables1
        }).then(response => {
            let urlArr1 = response.data.listURLCompanies.items
            console.log("LIST COMPANY URLS: "+urlArr1)
            setUrls(urlArr1);
        }).catch(error => {
       console.log("Error for getURL company ", error)
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
        console.log("this company is:",thisCompany)
        /*the down vote and up votes dont display properly on some company pages */
        urls.map( Obj=> {
            var urlObj = Obj.uRL;
            urlArr.push(
                (
                    <li><a href={urlObj.url}>{urlObj.title}</a></li>
                )
            )
        });
        
        return(
            <div>
                {urlArr}
            </div>
        )
    }

}

export default LeetCodeURL;