import React from "react";
import {Link} from "react-router-dom";

export default function StoriesCollection() {
    return (
        <div className="container col-lg-9 col-sm-12">

            <div className="list_story_header fixed-top">
                <h1>Read Stories</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-1">
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>

                            <div className="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper
                                libero. Sed
                                tempus ultricies magna eget viverra. Nullam aliquam, ante id congue malesuada, erat ligula
                                interdum
                                ipsum, sit amet pulvinar urna diam sit amet odio. Vivamus tempor sem at elit pharetra dictum
                                fringilla
                                vitae ex. Cras semper sagittis arcu, a fermentum nulla varius at. Duis vel augue ornare,
                                imperdiet odio
                                ac, porta orci. Duis elit diam, tincidunt et libero vitae, bibendum cursus tellus. Nam maximus
                                diam eu
                                nisi suscipit, quis porta lorem posuere. In vulputate libero ex, quis condimentum arcu hendrerit
                                blandit. Morbi sit amet semper purus. Pellentesque pharetra sem metus, vitae lobortis lacus
                                tincidunt
                                id.

                                Curabitur efficitur ultrices tincidunt. Suspendisse consequat aliquam lacus ac vulputate. Aenean
                                fringilla sem ut felis fermentum, non interdum odio dignissim. Cras ac nisl id leo laoreet
                                consectetur
                                vitae a enim. Aliquam dignissim, tortor finibus pulvinar lobortis, nisl dui congue ante, ut
                                molestie mi
                                turpis ut leo. Morbi viverra bibendum pretium. Mauris vitae scelerisque nisl. Vivamus vel
                                dapibus
                                tellus.

                                Praesent cursus, odio sed fringilla ullamcorper, enim lorem tempus massa, sit amet condimentum
                                libero
                                sapien ac odio. Suspendisse potenti. Cras venenatis mi a lacus porta, nec consequat nibh dictum.
                                Aliquam
                                mi risus, fringilla et ornare sed, rutrum non ante. Aliquam erat volutpat. Nam ornare facilisis
                                gravida.
                                Nam volutpat lobortis urna, sit amet finibus orci. Sed id finibus leo. Integer vitae egestas
                                lorem.
                                Nullam in ultrices ipsum, ut dignissim ante. Praesent bibendum, nunc nec eleifend sollicitudin,
                                mauris
                                elit fermentum risus, sit amet feugiat quam purus et quam.
                            </div>
                            <div className={'card-link'}><Link to={'/story'} >Read more...</Link></div>
                            {/*<a href="read_story.html" className="card-link">Read more...</a>*/}

                        </div>
                        <div className="card-footer">
                            <div className="view_icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye-fill" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path fillRule="evenodd"
                                          d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>
                            </div>
                            <div className="view_text">245 Views</div>
                            <div className="reading_icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-laptop" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
    d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
                                    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
                                </svg>
                            </div>
                            <div className="reading_text">245 Current Reading</div>


                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>

                            <div className="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper
                                libero. Sed
                                tempus ultricies magna eget viverra. Nullam aliquam, ante id congue malesuada, erat ligula
                                interdum
                                ipsum, sit amet pulvinar urna diam sit amet odio. Vivamus tempor sem at elit pharetra dictum
                                fringilla
                                vitae ex. Cras semper sagittis arcu, a fermentum nulla varius at. Duis vel augue ornare,
                                imperdiet odio
                                ac, porta orci. Duis elit diam, tincidunt et libero vitae, bibendum cursus tellus. Nam maximus
                                diam eu
                                nisi suscipit, quis porta lorem posuere. In vulputate libero ex, quis condimentum arcu hendrerit
                                blandit. Morbi sit amet semper purus. Pellentesque pharetra sem metus, vitae lobortis lacus
                                tincidunt
                                id.

                                Curabitur efficitur ultrices tincidunt. Suspendisse consequat aliquam lacus ac vulputate. Aenean
                                fringilla sem ut felis fermentum, non interdum odio dignissim. Cras ac nisl id leo laoreet
                                consectetur
                                vitae a enim. Aliquam dignissim, tortor finibus pulvinar lobortis, nisl dui congue ante, ut
                                molestie mi
                                turpis ut leo. Morbi viverra bibendum pretium. Mauris vitae scelerisque nisl. Vivamus vel
                                dapibus
                                tellus.

                                Praesent cursus, odio sed fringilla ullamcorper, enim lorem tempus massa, sit amet condimentum
                                libero
                                sapien ac odio. Suspendisse potenti. Cras venenatis mi a lacus porta, nec consequat nibh dictum.
                                Aliquam
                                mi risus, fringilla et ornare sed, rutrum non ante. Aliquam erat volutpat. Nam ornare facilisis
                                gravida.
                                Nam volutpat lobortis urna, sit amet finibus orci. Sed id finibus leo. Integer vitae egestas
                                lorem.
                                Nullam in ultrices ipsum, ut dignissim ante. Praesent bibendum, nunc nec eleifend sollicitudin,
                                mauris
                                elit fermentum risus, sit amet feugiat quam purus et quam.
                            </div>
                            <div className={'card-link'}><Link to={'/story'} >Read more...</Link></div>
                            {/*<a href="read_story.html" className="card-link">Read more...</a>*/}

                        </div>
                        <div className="card-footer">
                            <div className="view_icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye-fill" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path fillRule="evenodd"
                                          d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>
                            </div>
                            <div className="view_text">245 Views</div>
                            <div className="reading_icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-laptop" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
                                    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
                                </svg>
                            </div>
                            <div className="reading_text">245 Current Reading</div>


                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>

                            <div className="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper
                                libero. Sed
                                tempus ultricies magna eget viverra. Nullam aliquam, ante id congue malesuada, erat ligula
                                interdum
                                ipsum, sit amet pulvinar urna diam sit amet odio. Vivamus tempor sem at elit pharetra dictum
                                fringilla
                                vitae ex. Cras semper sagittis arcu, a fermentum nulla varius at. Duis vel augue ornare,
                                imperdiet odio
                                ac, porta orci. Duis elit diam, tincidunt et libero vitae, bibendum cursus tellus. Nam maximus
                                diam eu
                                nisi suscipit, quis porta lorem posuere. In vulputate libero ex, quis condimentum arcu hendrerit
                                blandit. Morbi sit amet semper purus. Pellentesque pharetra sem metus, vitae lobortis lacus
                                tincidunt
                                id.

                                Curabitur efficitur ultrices tincidunt. Suspendisse consequat aliquam lacus ac vulputate. Aenean
                                fringilla sem ut felis fermentum, non interdum odio dignissim. Cras ac nisl id leo laoreet
                                consectetur
                                vitae a enim. Aliquam dignissim, tortor finibus pulvinar lobortis, nisl dui congue ante, ut
                                molestie mi
                                turpis ut leo. Morbi viverra bibendum pretium. Mauris vitae scelerisque nisl. Vivamus vel
                                dapibus
                                tellus.

                                Praesent cursus, odio sed fringilla ullamcorper, enim lorem tempus massa, sit amet condimentum
                                libero
                                sapien ac odio. Suspendisse potenti. Cras venenatis mi a lacus porta, nec consequat nibh dictum.
                                Aliquam
                                mi risus, fringilla et ornare sed, rutrum non ante. Aliquam erat volutpat. Nam ornare facilisis
                                gravida.
                                Nam volutpat lobortis urna, sit amet finibus orci. Sed id finibus leo. Integer vitae egestas
                                lorem.
                                Nullam in ultrices ipsum, ut dignissim ante. Praesent bibendum, nunc nec eleifend sollicitudin,
                                mauris
                                elit fermentum risus, sit amet feugiat quam purus et quam.
                            </div>
                            <div className={'card-link'}><Link to={'/story'} >Read more...</Link></div>
                            {/*<a href="read_story.html" className="card-link">Read more...</a>*/}

                        </div>
                        <div className="card-footer">
                            <div className="view_icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye-fill" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path fillRule="evenodd"
                                          d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>
                            </div>
                            <div className="view_text">245 Views</div>
                            <div className="reading_icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-laptop" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
                                    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
                                </svg>
                            </div>
                            <div className="reading_text">245 Current Reading</div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}