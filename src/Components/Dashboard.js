
import React from "react";
import { Base } from "../Core/Base";

const Dashboard = ({children}) =>{
    return (
        <Base>
        <div className="dashboard">
            <div style={{ background: "whitesmoke" }} className="dashboard-Page">
                <div style={{ borderLeftColor: "black" }} className="card-component">
                    <h6 style={{ color: "#1cc88a" }}> Earnings (Monthly)</h6>
                    <h4>$40,0000</h4>
                </div>
                <div style={{ borderLeftColor: "#4e73df" }} className="card-component">
                    <h6 style={{ color: "#4e73df" }}>Earnings (Annualy)</h6>
                    <h4>$40,0000</h4>
                </div>
                <div style={{ borderLeftColor: "#f6c23e" }} className="card-component">
                    <h4 style={{ color: "#f6c23e" }}>Tasks</h4>
                    <h3>50</h3  >
                </div>
                {/* <div style={{ borderLeftColor: "#e74a3b" }} className="card-component">
                    <h6 style={{ color: "#e74a3b" }}>Pending Requests</h6>
                    <h4>20</h4>
                </div> */}
            </div>
        </div>
        </Base>
    )
}

export default Dashboard