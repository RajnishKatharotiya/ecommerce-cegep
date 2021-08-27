import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import Header from '../shared/Header'
import './style.css'

const Landing = () => (
    <div className="landing-hero_container">
        <Header transparent={true} />
        <div className="landing-hero row">
            <div className="landing-hero_title-box col-8">
                <h2>Hi,</h2>
                <h4>Browse various receipes, learn to prepare easily and order ingeridents you need at your door. <img src="https://emojipedia-us.s3.amazonaws.com:443/source/skype/289/smiling-face-with-heart-eyes_1f60d.png" srcSet="https://emojipedia-us.s3.amazonaws.com:443/source/skype/289/smiling-face-with-heart-eyes_1f60d.png 2x" alt="Smiling Face with Heart-Eyes" title="Smiling Face with Heart-Eyes" width="72" height="72"></img></h4>
                <div className="landing-hero_join-mail">
                    <h3>Join our mailist for new receipe updates</h3>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Your email"
                            aria-label="your email"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="dark" id="button-addon2">
                            Join Now
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <div className="landing-hero_img-box col-4">
                <img src="/images/food-img.webp" alt="food-img" />
            </div>
        </div>
    </div>
)
export default Landing;