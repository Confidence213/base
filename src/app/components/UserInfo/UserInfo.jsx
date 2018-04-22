/**
 * Created by Indra on 4/22/2018.
 */
import React from 'react';
const UserInfo = (props) => (
    <div className="UserInfo">
        <h3>{props.name}</h3>
        <p>{props.branch}</p>
    </div>
);
export default UserInfo;

