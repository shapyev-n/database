import React, { useContext, useEffect } from 'react';
import { productContext } from '../../context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Home = () => {
    const {getProduct,data,deleteProduct} = useContext(productContext)

    useEffect(() => {getProduct()},[])
    console.log(data);
    return (
        <div className='container'>
            <div className="home">
                {
                    data.map(el => (
                        <Card sx={{ width: 345,height:440 }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="260"
                          image={el.image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {el.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {el.price}$
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Share</Button>
                          <Button onClick={() => deleteProduct(el.id)} size="small">delete</Button>
                        </CardActions>
                      </Card>
                    )) 
                }
            </div>
        </div>
    );
};

export default Home;