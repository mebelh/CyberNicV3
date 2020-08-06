import React, { useEffect } from "react";
import UsersSearch from "./UsersSearch/UsersSearch";
import UsersList from "./UsersList";
import "./style.scss";
import { useState } from "react";
import Loading from "components/Loading";
export default function Users() {
    const [users, setUsers] = useState([]);
    const [showUsers, setShowUsers] = useState([]);

    const [searchFilter, setSearchFilter] = useState("");

    const onSearchFilterChange = (label) => {
        setSearchFilter(label.toUpperCase());
    };

    useEffect(() => {
        if (searchFilter.length) {
            const tempArr = users.filter(
                (e) => ~e.name.toUpperCase().indexOf(searchFilter)
            );
            return setShowUsers(tempArr);
        }
        setShowUsers(users);
    }, [searchFilter]);

    useEffect(() => {
        fetch("/admin/users/getall", {
            method: "get",
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
        }).then(async (users) => {
            const usersData = await users.json();
            setUsers(usersData);
            setShowUsers(usersData);
        });
    }, []);

    const toggleUserStatus = async (login) => {
        await fetch("/admin/users/toggleuserstatus", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({ login }),
        });
    };

    return !users.length ? (
        <div className="loading">
            <Loading />
        </div>
    ) : (
        <React.Fragment>
            <div className="Users">
                <UsersSearch onSearchFilterChange={onSearchFilterChange} />
                <div className="">
                    <ul className="user list-group">
                        <li className="list-group-item">
                            <span>Имя</span>
                            <span>Почта</span>
                            <span>Статус</span>
                        </li>
                        <UsersList
                            users={showUsers}
                            toggleUserStatus={toggleUserStatus}
                        />
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
