const express = require('express');
const soap = require('soap');
const cors = require('cors')

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { user_id, passwd,auth_code } = req.body;

  const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL';
  soap.createClient(url, (err, client) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    client.login({ user_id, passwd,auth_code }, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ error: 'Invalid Username or Password' });
      }
      res.json({ message: 'Login Successful', result });
    });
  });
});


  app.get('/dashboard/category', async (req, res) => {
  
    const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL'
  soap.createClient(url,(err,client)=>{
    if(err){
      console.log(err)
      return res.status(500).json({error:'internal server error'})

    }
    client.cat_list((err,result)=>{
      if (err) {
        console.error(err);
        return res.status(400).json({ error: 'Invalid '+err });
      }
      res.json({ message: 'categories', result });
    });
    })
  })    

   app.get('/inventory',async(req,res)=>{
    const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL'
    soap.createClient(url,(err,client)=>{
      if(err)
      {
        console.log('error is ',err)
        return res.json({Err:err})
      }
      client.inventory_rep((err,result)=>{
        if(err){
          console.error(err);
          return res.json({err:err})
        }
        return res.json({Result:result})
      })
    })
   }) 

   app.get('/customer',async(req,res)=>{
    const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL'
    soap.createClient(url,(err,client)=>{
      if(err){
        console.log(err)
        return res.status(500).json({error:'internal server error'})
      }
      client.customer_list((err,result)=>{
        if(err){
          console.error(err);
          return res.status(400).json({ error: 'Invalid '+err });
        }
        
      res.json({ message: 'customer_list', result});
      })
    })
   })

   app.get('/supplier',async(req,res)=>{
    const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL'
    soap.createClient(url,(err,client)=>{
      if(err){
        console.log(err)
        return res.status(500).json({error:'internal server error'})
      }
      client.supplier_list((err,result)=>{
        if(err){
          console.error(err);
          return res.status(400).json({ error: 'Invalid '+err });
        }
        
      res.json({ message: 'supplier list', result});
      })
    })
   })

  app.get('/expense',(req,res)=>{
    const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL'
    soap.createClient(url,(err,client)=>{
      if(err){
        console.log(err)
        return res.status(500).json({Error:'internal server error',err})
      }
      client.expence_list((err,result)=>{
        if(err){
        return  res.status(400).json({error:'invalid'+err})
        }
        return res.json({message:'expense list',result})
      })
    })
  })
  

  app.get('/payaable',(req,res)=>{
    const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL'
    soap.createClient(url,(err,client)=>{
      if(err){
        return res.status(500).json({Error:'internal server err'+err})
      }
      client.payable_list((err,result)=>{
        if(err){
          return res.status(400).json({Error:err})
        }
        return res.json({message:'payable list',result})
      })
    })
  })

app.get('/receivabledata',(req,res)=>{
  const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL'
  soap.createClient(url,(err,client)=>{
    if(err){
      res.status(500).json({Error:'internal server err'+err})
    }
    client.recievable_list((err,result)=>{
      if(err){
        return res.status(400).json({Error:err})
      }
      return res.json({message:'receivabledata',result})
    })
  })
})


app.post('/profitvoice', (req, res) => {
  const { st_date, ed_date } = req.body;
  const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL';

  soap.createClient(url, (err, client) => {
      if (err) {
          return res.status(500).json({ Error: 'Internal server error' });
      }

      client.profit_inv_get({ st_date, ed_date }, (err, result) => {
          if (err) {
              return res.status(400).json({ Error:"error"+ err });
          }
          let data = [];

          try {
             
              data = JSON.parse(result.profit_inv_getResult);
          } catch (error) {
              return res.status(400).json({ Error: 'Invalid data format' });
          }
      
          
          const dataBetweenDates = data.filter(item => {
              const itemDate = new Date(item.dt_date);
              return itemDate >= new Date(st_date) && itemDate <= new Date(ed_date);
          });
    
          return res.json({ message: 'Profitinvoice', dataBetweenDates });
      });
  });
});

app.post('/invoiceviewdata',(req,res)=>{
  const{inv_no,dept_var,status,loc_id}=req.body
  const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL';
  soap.createClient(url,(err,client)=>{
    if(err){
     return res.status(500).json({Error:'internal server err',details: err.message })
    }
    client.invoice_view({inv_no,dept_var,status,loc_id},(err,result)=>{
      if(err)
      {
        return res.status(400).json({Error:'invalid data',details: err.message })
      }
      let data=[]
       data=JSON.parse( result.invoice_viewResult)
      // console.log('data', data)
     

    const filteredResult = data.filter(item => 
      item.inv_no === parseInt(inv_no) && 
      item.dept_var === parseInt(dept_var) && 
      item.status === parseInt(status) && 
      item.location_id === loc_id
    );
    const firstRecord = filteredResult.length > 0 ? filteredResult[0] :filteredResult ;
    // let foundResult = null;
    // for (const item of data) {
    //   if (
    //     item.inv_no === inv_no &&
    //     item.dept_var === dept_var &&
    //     item.status === status &&
    //     item.location_id === loc_id
    //   ) {
    //     foundResult = item;
    //     break; 
    //   }
    // }
    
    console.log("result", firstRecord);
    res.status(200).json({Result: firstRecord});
    })
  })
})

app.get("/specificdata/:category",(req,res)=>{
  const catagory=req.params.category
  console.log(catagory)
  const url = 'http://5.189.157.38:4000/retailService.asmx?WSDL';
  soap.createClient(url,(err,client)=>{
    if(err){
     return res.status(500).json({Error:'internal server err',details: err.message })
    }
    client.inventory_rep({catagory},(err,result)=>{
      if(err){
      return  res.status(400).json({Error:'invalid data',details: err.message })
      }
      console.log(result)
      return res.status(200).json({Result:result})
    })
  })

  
})



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

