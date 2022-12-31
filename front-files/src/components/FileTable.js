import { useEffect, useState } from "react";
import { Col, Row, Spinner, Table } from "react-bootstrap";
import RestClient from "../services/RestClient";

const FileTable = () => {
    const [ files, setFiles ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ header, setHeader ] = useState([
        {key: 'file', label: 'File Name'},
        {key: 'text', label: 'Text'},
        {key: 'number', label: 'Number'},
        {key: 'hex', label: 'Hex'},
    ]);
    const [ data, setData ] = useState([]);

    useEffect(()=>{
        setLoading(true);
        RestClient.getFiles()
            .then(res=>{
                setLoading(false);
                const { data } = res.data;
                let dataTmp = [];

                // Processing data to get all files
                data.map(d => {
                    let { lines } = d;
                    if (lines) {
                        lines = lines.filter(l => l != null);
                        dataTmp = dataTmp.concat(lines);
                    }
                })

                setData(dataTmp);
            })
            .catch(err=>{
                setLoading(false);

            })
    }, [])

    return <>
        <Row>
            <Col xs={12}>
                {files.map((f, i) => {
                    return <span key={i}>{f.file}</span>
                })}
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            {header.map((h,i) => {
                                return <th key={i}>{h.label}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => {

                            return <tr key={i}>
                                        {header.map((h,i2)=> {
                                            const { key } = h;
                                            return <td key={`${i}-${i2}`}>
                                                        {d[key]}
                                                    </td>
                                        })}
                                    </tr>
                        })}
                        
                    </tbody>
                </Table>
                {loading && <Spinner role="status" size='md' variant='border' />}
            </Col>
        </Row>
    </>
}

export default FileTable;