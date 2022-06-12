module Api
  module V1
    class ReviewsController < ApiController
      #protect_from_forgery with :null_session
     
      def index
        if params[:id]
          reviews = Review.where(restaurant_id: params[:id])
          render json: reviews, status: :ok
        else
          reviews = Review.order('created_at');
          render json: {reviews: reviews}, status: :ok
        end
        #restaurant_id
      end     

      # POST /api/v1/reviews
      def create
        #review = Review.reviews.new(review_params)
        review = Review.create(review_params)
        review.user_id = session[:user_id]
        review.restaurant_id = params[:restaurant_id]
        
      # (
      #   title: params.review[:title],
      #   description: params.review[:description],
      #   score: params[:score],
      #   restaurant_id: params[:restaurant_id],
      #   user_id: session[:user_id]
      # )

        if review.save!
          #render json: ReviewSerializer.new(reviews).serializer_json
          render json: review, status: 200
        else
          render json:{error:["could not save review"]}, status: 422
        end
      end

      # DELETE /api/v1/reviews/:id
      def destroy
    
         review = Review.find(params[:id])
         if review.destroy
           
            head :no_content
          else
            render json:{error:restaurant.error.messages}, status: 422
          end
        end

      private

      # Strong params
      def review_params
        params.require(:review).permit(:title, :description, :score, :restaurant_id)
      end

      # fast_jsonapi serializer
      def serializer(records, options = {})
        puts "here"
         RestaurantSerializer
         .new(@records, @options)
         .serialized_json
     end

      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end