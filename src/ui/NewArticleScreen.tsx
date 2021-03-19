import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import ReactDropzone from "react-dropzone";

import { LOButton, LODropdownWithIcon, LOFooter, LOLargeButton, LONavBar, LOTextInput, LOTextInputWithIcon } from '../components';
import { saveArticle, signin } from '../redux/actions';
import { COLORS } from '../utilities';

type Props = {

}

export const NewArticleScreen: React.FC<Props> = () => {

    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');
    const [image, setImage] = useState('');
    const [_categorie, setCategorie] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.id) {
            case 'titre':
                setTitre(e.target.value)
                break;
            case 'contenu':
                setContenu(e.target.value)
                break;
            default:
                break;
        }

    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();

        let article = { titre, contenu, image, _categorie }
        dispatch(saveArticle(article, history))
    }

    return (
        <>
            <LONavBar />

            <div className="container" style={{ padding: 20 }}>

                <div className="row">
                    <div className="col-lg-8">
                        <textarea className="contenu" placeholder="Title" />

                        <div className="contentu-container">

                            <div className="contenu-title">
                                <p>Text</p>
                            </div>

                            <textarea className="contenu" placeholder="Tell your story" />

                        </div>

                        <LOButton title="save" />
                        <LOButton title="publish" />

                    </div>
                    <div className="col-lg-4">
                        <ReactDropzone
                            accept="image/*"
                            onDrop={file => console.log(file)}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section className="image-dropzone">
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <h6>Add Featured Image</h6>
                                    </div>
                                </section>
                            )}
                        </ReactDropzone>
                        <LODropdownWithIcon icon="fa fa-list-alt" placeholder="Select Category" />
                        <LOTextInputWithIcon icon="fa fa-tag" placeholder="Article Tags" />
                        <small>Seperate tags with a comma</small>
                    </div>
                </div>

            </div>

            <LOFooter />
        </>
    )
}