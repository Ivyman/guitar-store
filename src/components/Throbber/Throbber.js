import React from 'react';
import './styles.sass';

const Throbber = () => (
    <div
        className="spinner"
        role="progressbar"
        style={{
            position: 'absolute',
            width: '0px',
            zIndex: 2000000000,
            left: '50%',
            top: '49%',
            transform: 'scale(0.35)'
        }}
    >
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(15deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation: 'spinner-line-fade-more 1s linear -1s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(45deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.916667s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(75deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.833333s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(105deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.75s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(135deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.666667s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(165deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.583333s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(195deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation: 'spinner-line-fade-more 1s linear -0.5s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(225deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.416667s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(255deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.333333s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(285deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.25s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(315deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.166667s infinite normal none running'
                }}
            />
        </div>
        <div
            style={{
                position: 'absolute',
                top: '-6px',
                width: '36px',
                height: '12px',
                background: 'transparent',
                borderRadius: '6px',
                transformOrigin: 'left center',
                transform: 'rotate(345deg) translateX(45px)'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgb(230, 59, 26)',
                    borderRadius: '6px',
                    boxShadow: 'transparent 0px 0px 1px',
                    animation:
                        'spinner-line-fade-more 1s linear -0.0833333s infinite normal none running'
                }}
            />
        </div>
    </div>
);

export default Throbber;
