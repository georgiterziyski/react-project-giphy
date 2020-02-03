import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div class="container">
                <div class="Header">
                    <img src="https://fontmeme.com/permalink/191118/4444c38a76080519f37bee751a73515e.png" class="img-fluid"></img>
                </div>
                <div class="form-wrapper">
                    <form> 
                        <div class="form-row">
                            <input id="input" class="form-control" type="text" placeholder="Type to search..."></input>
                        </div>
                        <div class="form-row2">
                            <div class="col-md-3">
                                <button id="button" class="btn" type="submit" >Search</button>
                            </div>
                            <div class="col-md-3 text-align-center">
                                <label class="label-view">View: </label>
                                <button type="button" class="btn-view">
                                    <div id="view">Grid</div>
                                </button>
                            </div>
                        </div>	   			
                    </form>	
                </div>
                <div id="result"></div>
        </div>
        )
    }
}

export default Home;
