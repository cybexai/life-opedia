import React, { CSSProperties, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { LOArticleMiniCard, LOArticleMostPopular, LOArticleSection, LOButton, LOFooter, LOJumbotron, LOLargeButton, LOLogo, LONavBar, LOTextArea, LOTextInput } from '../components';
import { signin } from '../redux/actions';
import { COLORS } from '../utilities';

type Props = {

}

export const ArticleDetailScreen: React.FC<Props> = () => {

    const [nom, setNom] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <LONavBar />

            <div className="container">
                <div className="row" style={{ padding: 20 }}>
                    <div className="col-lg-9">
                        <h5 className="text-primary-color">FOOD</h5>
                        <h4>A darkling plan</h4>
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
                        <LOJumbotron />
                        <p style={{ marginTop: 10 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed porro quam ipsam perferendis, omnis architecto fugit alias beatae suscipit odit animi laboriosam, dolorem ipsa autem delectus quos tempora rerum et.</p>

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

                                <div style={{padding: 10}}>
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
                        <LOArticleMostPopular showDownload={false} />
                    </div>
                </div>
            </div>

            <LOFooter />

        </>
    )
}

const styles: { [key: string]: CSSProperties } = {
    miniJumbo: {
        height: 200
    },
    miniCard: {
        backgroundColor: COLORS.floralwhite,
        borderStyle: 'none'
    }
}