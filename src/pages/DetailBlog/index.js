import React, { useEffect, useState } from 'react';
import './detailBlog.scss';
import { Gap, Link } from '../../components';
import { useNavigate } from 'react-router-dom';
import withRouter from './withRouter';
import Axios from 'axios';

const DetailBlog = (props) => {
    const [data, setData] = useState({});
    useEffect(() => {
        const id = props.params.id;
        Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                setData(res.data.data);
            })
            .catch(err => {
                console.log('error: ', err)
            })
    }, [props])

    const navigate = useNavigate();

    if (data.author) {
        return (
            <div className="detail-blog-wrapper">
                <img className="img-cover" src={`http://localhost:4000/${data.image}`} alt="thumb" />
                <p className="blog-title">{data.title}</p>
                <p className="blog-author">{data.author.name} -  {data.createdAt}</p>
                <p className="blog-body">{data.body}</p>
                <Gap height={20} />
                <Link title="Kembali ke Home" onClick={() => navigate('/')} />
            </div>
        )
    }
    return <p>Loading data ...</p>
}

export default withRouter(DetailBlog);