import React, { useEffect, useState } from "react";
import { Button, Gap, Input, TextArea, Upload, Link } from "../../components";
import "./createBlog.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    postToAPI,
    updateToAPI,
    setForm,
    setImgPreview,
} from "../../config/redux/action";
import withRouter from "../../config/Routes/withRouter";
import Axios from "axios";

const CreateBlog = (props) => {
    const { form, imgPreview } = useSelector(
        (state) => state.createBlogReducer
    );
    const { title, body } = form;
    const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("params: ", props);
        const id = props.params.id;
        if (id) {
            setIsUpdate(true);
            Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
                .then((res) => {
                    const data = res.data.data;
                    console.log("data: ", data);
                    dispatch(setForm("title", data.title));
                    dispatch(setForm("body", data.body));
                    dispatch(
                        setImgPreview(`http://localhost:4000/${data.image}`)
                    );
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        }
    }, [props, dispatch]);

    const onSubmit = () => {
        const id = props.params.id;
        if (isUpdate) {
            console.log("Update data");
            updateToAPI(form, id);
        } else {
            console.log("Create data");
            postToAPI(form);
        }
    };

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm("image", file));
        dispatch(setImgPreview(URL.createObjectURL(file)));
    };
    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => navigate("/")} />
            <p className="title">
                {isUpdate ? "Update" : "Create New"} Blog Post
            </p>
            <Input
                label="Post Title"
                value={title}
                onChange={(e) => dispatch(setForm("title", e.target.value))}
            />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea
                value={body}
                onChange={(e) => dispatch(setForm("body", e.target.value))}
            />
            <Gap height={20} />
            <div className="button-action">
                <Button
                    title={isUpdate ? "Update" : "Simpan"}
                    onClick={onSubmit}
                />
            </div>
            <Gap height={20} />
        </div>
    );
};
export default withRouter(CreateBlog);
