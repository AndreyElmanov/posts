import React from 'react';
import "./styles.css"
import Button from '@mui/material/Button';


export const InfoBox = () => {
    const handleClickCreatePost = function (e) {
        e.preventDefault();
        console.log("Есть контакт");
    }
 return (
        <div className="info">
            <div className='info_about'>
                <h3 className='welcome'>Добро пожаловать</h3>
            </div>
            <Button variant="contained" onClick={handleClickCreatePost}>Разместить пост</Button>
        </div>
 )
}