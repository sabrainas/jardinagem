import React from 'react'

export default function Cards({ children, className }) {
    const header = React.Children.toArray(children).find(
        (child) => child.type === Header
    );

    const content = React.Children.toArray(children).find(
        (child) => child.type === Content
    );

    return (
        <div className={`${className}`}>
            {/* header  */}
            {header && <div>{header}</div>}
            {/* content  */}
            {content && <div>{content}</div>}
        </div>
    )
}

export function Header({children, className}){
    return <div className={`${className}`}>{children}</div>
}

export function Content({children}){
    return <div className={`${className}`}>{children}</div>
}