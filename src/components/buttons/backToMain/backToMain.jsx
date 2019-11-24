import React from 'react';
import { Link } from "react-router-dom";
import './backToMain.css';

export function BackToMainButton() {
    return (
        <Link replace={true} to={`/`} className={`backToMain-button mainButton`}>Go Back</Link>
    )
}
