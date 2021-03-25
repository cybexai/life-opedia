import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getArticleById } from '../api';

import { LOArticleMiniCard, LOArticleMostPopular, LOButton, LOFooter, LOJumbotron, LOListItem, LONavBar, LOTextArea, LOTextInput } from '../components';
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
                                <span><i className="fa fa-eye text-primary-color"></i> 56</span>
                                <span><i className="fa fa-arrow-alt-circle-up ml-3"></i> 4</span>
                                <i className="fa fa-bookmark ml-3"></i>
                            </div>
                        </div>
                        <LOJumbotron style={{ backgroundImage: `url(${article.image})` }} />
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
                                <LOListItem title="MARKETTA BLOCK SAYS..."
                                    date="JUNE 07 2020"
                                    body={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, in veritatis minus itaque quos cupiditate amet quis vitae labore modi obcaecati quasi architecto magni ipsum atque velit temporibus.`} />
                                <LOListItem title="JOE DARCIN SAYS..."
                                    date="AUGUST 18 2020"
                                    body={`I have to say that this is the best article i have never seen.`} />
                                <LOListItem title="ALEX SAYS..."
                                    date="OCTOBER 28 2020"
                                    body={`thank you Darcin`} />
                                <LOListItem title="BEE SAYS..."
                                    date="OCTOBER 28 2020"
                                    body={`Nice`} hideDivider />
        
                                <div className="comment-input-ctn">
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
            </div> : null}

            <LOFooter />

        </>
    )
}