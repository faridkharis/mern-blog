import React from 'react';
import './blogItem.scss';
import { Button, Gap } from '../../../components';
import { useNavigate } from 'react-router-dom';

function BlogItemComponent(props) {
    const navigate = useNavigate();

    const { image, title, name, date, body, _id } = props;
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => navigate(`/detail-blog/${_id}`)} />
            </div>
        </div>
    )
}

export default BlogItemComponent;