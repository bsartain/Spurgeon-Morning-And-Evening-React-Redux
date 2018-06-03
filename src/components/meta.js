import React from 'react';
import { Helmet } from 'react-helmet'

const Meta = () => {
    return(
        <div className="meta-info">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Spurgeon Morning And Evening Devotional</title>
                <link rel="canonical" href="http://brettsartain.org/spurgeon" />
                <meta name="description" content="Charles Spurgeon's uplifting messages for each day of the year will comfort and refresh you in your walk with God. Spending time with God at the start and the close of each day will bring a new joy in your life."/>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Spurgeon Morning and Evening Devotional" />
                <meta property="og:description" content="Charles Spurgeon's uplifting messages for each day of the year will comfort and refresh you in your walk with God. Spending time with God at the start and the close of each day will bring a new joy in your life." />
                <meta property="og:url" content="http//brettsartain.org/spurgeon/" />
                <meta property="og:site_name" content="Spurgeon Morning and Evening Devotional" />
                <meta property="og:image" content="http://brettsartain.org/spurgeon/static/media/cs.00b00ec7.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Charles Spurgeon's uplifting messages for each day of the year will comfort and refresh you in your walk with God." />
                <meta name="twitter:title" content="Spurgeon Morning and Evening Devotional" />
                <meta name="twitter:image" content="http://brettsartain.org/spurgeon/static/media/cs.00b00ec7.png" />
            </Helmet>
        </div>
    )
}

export default Meta;