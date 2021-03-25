import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getArticleById } from '../api';

import { LOArticleMiniCard, LOArticleMostPopular, LOButton, LOFooter, LOJumbotron, LONavBar, LOTextArea, LOTextInput } from '../components';
import { COLORS } from '../utilities';

type Props = {

}

export const ArticleDetailScreen: React.FC<Props> = () => {

    const [article, setArticle] = useState<any>([]);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getArticleById(id).then((response: AxiosResponse) => {
            setArticle(response.data)
        })
    }, []);

    return (
        <>
            <LONavBar />

            {article.length !== 0 ? <div className="container">
                <div className="row" style={{ padding: 20 }}>
                    <div className="col-lg-9">
                        <h5 className="text-primary-color">{article._categorie.nom}</h5>
                        <h4>{article.titre}</h4>
                        <h6 className="text-primary-color">By Alexandru Bangau</h6>
                        <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                            <div>
                                <h6>June 7, 2020</h6>
                            </div>
                            <div>
                                <i className="fa fa-eye mr-3 text-primary-color"> 56</i>
                                <i className="fa fa-arrow-alt-circle-up mr-3"> 4</i>
                                <i className="fa fa-bookmark"></i>
                            </div>
                        </div>
                        <LOJumbotron style={{backgroundImage:`url(${article.image})`}} />
                        <p style={{ marginTop: 10 }}>{article.contenu}</p>

                        <div className="tag-container">
                            <p>Tags: historical fiction, food.</p>
                            <div>
                                <img src="/assets/images/linkedin.png" alt="Linkedin" />
                                <img src="/assets/images/twitter.png" alt="Twitter" />
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h6>4 Comments</h6>
                                <LOButton title="Post a Comment" style={{ margin: 0 }} />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h6>MARKETTA BLOCK SAYS...</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, in veritatis minus itaque quos cupiditate amet quis vitae labore modi obcaecati quasi architecto magni ipsum atque velit temporibus. Error, quibusdam.</p>
                                    <small>JUNE 07 2020</small>
                                </li>
                                <li className="list-group-item">
                                    <h6>MARKETTA BLOCK SAYS...</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, in veritatis minus itaque quos cupiditate amet quis vitae labore modi obcaecati quasi architecto magni ipsum atque velit temporibus. Error, quibusdam.</p>
                                    <small>JUNE 07 2020</small>
                                </li>

                                <div style={{ padding: 10 }}>
                                    <LOTextInput placeholder="Name" type="text" labelColor={COLORS.black} bgColor="rgba(253,96,0,0.2)" />
                                    <LOTextArea placeholder="Comment" labelTop={true} labelColor={COLORS.black} bgColor="rgba(253,96,0,0.2)" />

                                    <LOButton title="comment" />
                                </div>

                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <h5 className="text-center ">Suggested Articles</h5>
                        <LOArticleMiniCard />
                        <LOArticleMiniCard />
                        <LOArticleMostPopular showDownload={false} headerBackground={COLORS.floralwhite} topTitle="Food" />
                    </div>
                </div>
            </div> : null }

            <LOFooter />

        </>
    )
}