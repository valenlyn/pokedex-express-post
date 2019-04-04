var React = require('react');

class Cards extends React.Component {

    render() {
        return (

                <div class="card" style={{width: '18rem'}}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.card}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

        );
    }
}



module.exports = Cards;