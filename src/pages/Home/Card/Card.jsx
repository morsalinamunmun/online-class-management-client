
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';

export default function CardItem() {
    const [rating, setRating] = useState(3);
    const role = 'accepted';
    const [classes, setClasses] = useState([]);
    console.log(classes)
    useEffect(() => {
        axios.get('https://y-gold-beta.vercel.app/classes')
            .then(res => {
                setClasses(res.data)
            })
    }, [])

    const classesItem = classes.filter(acpClass => acpClass.role == role)
    return (
        <div className='px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 max-w-5xl mx-auto'>
            {
                classesItem.map(acpClass =>

                    <Card key={acpClass._id} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={acpClass.image_url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {acpClass.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {acpClass.description}
                            </Typography>
                            <div className='flex gap-20'>
                                <Typography variant="body2" component="div">Posted:
                                    {acpClass.name}
                                </Typography>
                                <Typography variant="body2" component="div">TK:
                                    {acpClass.price}
                                </Typography>
                            </div>
                        </CardContent>
                            <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    onChange={setRating}
                                />
                        <CardActions>
                            <Button size="small">Total Enrollment: 300</Button>

                        </CardActions>
                    </Card>
                )
            }
        </div>
    );
}