import React, { Component } from 'react';
import { CSVLink } from "react-csv";

class AsyncCSV extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            loading: false
        }
        this.csvLinkEl = React.createRef();
        this.headers = [
            { label: "Name", key: "name" },
            { label: "Username", key: "username" },
            { label: "Email", key: "email" },
            { label: "Phone", key: "phone" },
            { label: "Website", key: "website" }
        ]
    }
        
    getUserList = () => {
        return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    }

    downloadReport = async () => {
        this.setState({ loading: true })
        const data = await this.getUserList();
        this.setState({ data: data, loading: false }, () => {
            setTimeout(() => {  
                this.csvLinkEl.current.link.click();
            });
        });
    }

    render() {
        const { data, loading } = this.state;

        return <div>
            <input 
            type="button"
            value={loading? "Downloading...": "Export to CSV (Async)"}
            onClick={this.downloadReport}
            disabled={loading}
            />
            <CSVLink 
                headers={this.headers}
                data={data}
                filename="Report_Async.csv"
                ref={this.csvLinkEl}
            />
        </div>
    }
}

export default AsyncCSV;