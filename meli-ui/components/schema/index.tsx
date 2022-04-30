const Schema = ({ schema }: any) => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </div>
    );
};
  
export default Schema;