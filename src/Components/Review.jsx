import ReviewForm from "./ReviewForm";
import Container from "./Shared/Container";
import Guide from "../assets/images/guide.png";

const Review = () => {

    
    
    const reviews = [
        { username: 'Sohana Sheikh', rating: 5, comment: 'Great guide, very knowledgeable!' },
        { username: 'Soharab', rating: 4, comment: 'Good experience, but could be more punctual.' }
    ];

    return (
        <>
            <Container>

                <div id="existing-reviews">
                    <div className="flex items-center gap-2 md:mt-14 mt-8">
                        <h2 className="mb-1 text-3xl leading-[1.2] sm:text-4xl md:text-[32px] font-semibold"
                        >Ratings and reviews </h2>
                        <img className="w-[55px] h-3" src={Guide} alt="" />
                    </div>
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-100 p-4 border border-gray-300 rounded mb-2">
                            <p><strong>{review.username}:</strong> {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)} - {review.comment}</p>
                        </div>
                    ))}
                </div>

                <ReviewForm></ReviewForm>
            </Container>
        </>
    );
};

export default Review;
