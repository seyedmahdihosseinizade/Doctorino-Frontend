import { Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HotelCard from './components/HotelCard';
import { baseURL } from '../../../utils/useAxios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const cities = [
    [1, "آذربایجان شرقی",],
    [2, "آذربایجان غربی",],
    [3, "اردبیل",],
    [4, "اصفهان",],
    [5, "البرز",],
    [6, "ایلام",],
    [7, "بوشهر",],
    [8, "تهران",],
    [9, "چهارمحال و بختیاری",],
    [10, "خراسان جنوبی",],
    [11, "خراسان رضوی",],
    [12, "خراسان شمالی",],
    [13, "خوزستان",],
    [14, "زنجان",],
    [15, "سمنان",],
    [16, "سیستان و بلوچستان",],
    [17, "فارس",],
    [18, "قزوین",],
    [19, "قم",],
    [20, "کردستان",],
    [21, "کرمان",],
    [22, "کرمانشاه",],
    [23, "کهگیلویه و بویراحمد",],
    [24, "گلستان",],
    [25, "لرستان",],
    [26, "گیلان",],
    [27, "مازندران",],
    [28, "مرکزی",],
    [29, "هرمزگان",],
    [30, "همدان",],
    [31, "یزد",]
];


const provinces =
    ["تعیین نشده", "آذربایجان شرقی", "آذربایجان غربی", "اردبیل", "اصفهان", "البرز", "ایلام", "بوشهر", "تهران", "چهارمحال و بختیاری", "خراسان جنوبی", "خراسان رضوی", "خراسان شمالی", "خوزستان", "زنجان", "سمنان", "سیستان و بلوچستان", "فارس", "قزوین", "قم", "کردستان", "کرمان", "کرمانشاه", "کهگیلویه و بویراحمد", "گلستان", "لرستان", "گیلان", "مازندران", "مرکزی", "هرمزگان", "همدان", "یزد"];

function Hotels(prop) {
    const [province, setProvince] = useState('');
    const [hotels, setHotels] = useState([]);
    const [hotelNum, setHotelNum] = useState('');


    const handleChange = (event) => {
        setProvince(event.target.value);
        setHotelNum(cities.filter( item => item[1] == province))
        console.log(hotelNum)
    };

    useEffect(() => {
        getHotels()
    }, [])


    let getHotels = async () => {
        let response = await axios.get(`${baseURL}/api/hotel/`)

        if (response.status === 200) {

            setHotels(response.data)
            response.data.map(item => console.log(item.city))
        } else {
            alert("Something went wrong")
        }
    }

    return (
        <Container>
            <Grid container>
                <Grid item sx={{ m: 3 }}>
                    <Box noWrap ml={3} sx={{ marginBottom: '-50px' }}>
                        <Typography variant="p" color="initial" sx={{ fontWeight: 'bold' }}>
                            لطفا ابتدا استان مورد نظر خود را انتخاب کنید 
                            
                            <FormControl  size="small" sx={{ minWidth: 250 , margin:"-10px 0px 0px 40px" } }>
                                <InputLabel id="demo-simple-select-label">استان</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={province}
                                    label="provinces"
                                    onChange={handleChange}
                                >
                                    {cities.map(item => <MenuItem value={item[1]}>{item[1]}</MenuItem>)}
                                </Select>
                            </FormControl>
                        
                        </Typography>
                        
                    </Box>
                </Grid>
                <Grid item sx={{ m: 3 }}>
                    {/* {let new_hotels = hotels.filter(hotel => hotel.city == )} */}
                    {hotels.filter(hotel => hotel.city == hotelNum).map((hotel, index) => (
                        <Grid item key={index} xs={12} md={12} lg={12} xl={12}>
                            <HotelCard hotel={hotel} />
                            {console.log(hotel)}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Hotels;