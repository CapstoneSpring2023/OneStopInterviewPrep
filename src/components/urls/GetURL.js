import React, { useEffect, useState } from "react";
import loadingGif from "../../images/loading.gif";
import { API } from 'aws-amplify';
import { listURLS, listURLCompanies} from '../../graphql/queries';


function GetURL(props){
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
            query: listURLCompanies, variables: input_variables,
        }).then(response => {
            let urlArr1 = response.data.listURLCompanies.items
            setUrls(urlArr1);
        }).catch(error => {
            console.log("Error in GetURL.js, inside graphql query: ", error)
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
        console.log("props debug: ", props)
        urls.map( Obj=> {
            var urlObj = Obj.uRL;
            if(urlObj.source == props.type ){
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

export default GetURL;