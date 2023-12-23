import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item >
                <div className="d-block w-20"> 

                    <p>"Alta Vita took our business to new heights! Their expertise, innovation, and commitment to understanding our brand set them apart. We're not just clients; we're partners in success. Highly recommend!"</p>
                </div>
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>"Alta Vita took our business to new heights! Their expertise, innovation, and commitment to understanding our brand set them apart. We're not just clients; we're partners in success. Highly recommend!"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-20"
                    src="holder.js/800x400?text=Second slide&bg=eee"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-20"
                    src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;