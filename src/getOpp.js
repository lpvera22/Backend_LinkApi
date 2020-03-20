const axios=require('axios') ;
const api_token='2b811d3eedc8c8864759de573cfda9fea2e20384';
const company_domain = 'teste50';

//URL for Deal listing with your $company_domain and $api_token variables
const url = 'https://'+company_domain+'.pipedrive.com/v1/deals?limit=500&api_token=' +api_token;

const getOpp =async () => {
    try {
      return await axios.get(url)
    } catch (error) {
      console.error(error)
    }
  }


async function getOppWon(){
    const c= await getOpp();
    
    const newD=c.data.data.filter(function(i){
        return i.status==='won';
    })
    
    return newD

}

module.exports=getOpp;