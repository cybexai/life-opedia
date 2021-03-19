import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ReactDropzone from "react-dropzone";

import { LOButton, LODropdownWithIcon, LOFooter, LONavBar, LOTextArea, LOTextInputWithIcon } from '../components';
import { getCategories, saveArticle } from '../redux/actions';
import { COLORS } from '../utilities';
import { RootState } from '../redux';

type Props = {

}

export const NewArticleScreen: React.FC<Props> = () => {

    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');
    const [image, setImage] = useState('');
    const [_categorie, setCategorie] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    const categories = useSelector((state: RootState) => state.appState.categories);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.id) {
            case 'categorie':
                setCategorie(e.target.value)
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

    const getImage = async (file: any) => {

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event: any) {
            setImage(event.target.result)
            return event.target.result
        };

    }

    return (
        <>
            <LONavBar />

            <div className="container px-3 authenticate py-5" >

                <form onSubmit={handleSubmit} className="row">
                    <div className="col-lg-8">

                        <LOTextArea placeholder="Title" labelColor={COLORS.black}
                            type="text" id='titre' onChange={handleInputChange} value={titre} />

                        <div className="contentu-container">

                            <div className="contenu-title">
                                <p>Text</p>
                            </div>

                            <LOTextArea placeholder="Tell your story" labelColor={COLORS.black}
                                type="text" id='contenu' onChange={handleInputChange} value={contenu} />

                        </div>

                        <LOButton title="save" type="submit" />
                        <LOButton title="publish" />

                    </div>
                    <div className="col-lg-4">
                        <ReactDropzone
                            accept="image/*"
                            onDrop={file => getImage(file[0])}
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
                        <LODropdownWithIcon data={categories} id='categorie' onChange={handleDropdownChange} value={_categorie} icon="fa fa-list-alt" placeholder="Select Category" />
                        <LOTextInputWithIcon icon="fa fa-tag" placeholder="Article Tags" />
                        <small>Seperate tags with a comma</small>
                    </div>
                </form>

            </div>

            <LOFooter />
        </>
    )
}