export const H100WithHeaderFooter = (props) => (
  <div className={`h-100 d-flex flex-column ${props.className}`}>

    {props.header}

    <div
      className="flex-grow-1 flex-shrink-1"
      style={{
        overflowX: "hidden",
        overflowY: "scroll",
      }}
    >
      {props.children}
    </div>
    <div className="flex-shrink-0">
      {props.footer}
    </div>
  </div>
);