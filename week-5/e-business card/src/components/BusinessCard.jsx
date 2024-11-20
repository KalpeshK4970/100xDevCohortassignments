

export function BusinessCard({cardDetails}){
 
    return <div>
        <h1>{cardDetails.name}</h1> 
        <p>{cardDetails.description}</p> 
        <h2>Interests</h2> 
        <ul>
           {cardDetails.interests.map((interest,index) => {
           return  <li key={index}> {interest}</li>
           })}
        </ul>
        <br />
        <button className="custom-button"
         onClick={() => window.open(cardDetails.linkedin, '_blank')}>
            Linkedin</button> 
        <button className="custom-button"
        onClick={() => window.open('https://www.twitter.com','_blank')}
        >Twitter</button>
        
    </div>
}

