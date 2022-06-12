module Api
  module V1
    class RestaurantsController < ApiController
     

      # GET /api/v1/restaurants
      def index
        puts restaurants
        #render json: serializer(restaurants, options)
        render json: @restaurants.to_json(only: [:name, :image_url, :average_score, :location, :slug])
      end
      
      # GET /api/v1/restaurants/:slug
      def show
        restaurant = Restaurant.find_by(slug: params[:slug])
        render json: RestaurantSerializer.new(restaurant, {}).serialized_json
      end

      # POST /api/v1/restaurants
      def create
        #restaurant = Restaurant.new(restaurant_params)
        restaurant = Restaurant.new(
          name: params[:name],
          location: params[:location],
          image_url: params[:image_url],
          average_score: params[:average_score]
        )

        if restaurant.save
          #render json: serializer(restaurant)
          render json: { status: :success, logged_in: true }, status: 200
        else
          render json: errors(restaurant), status: 422
        end
      end

      # PATCH /api/v1/restaurant/:slug
      def update
        restaurant = Restaurant.find_by(slug: params[:slug])

        if restaurant.update(restaurant_params)
          render json: serializer(restaurant, options)
        else
          render json: errors(restaurant), status: 422
        end
      end

      # DELETE /api/v1/restaurant/:slug
      def destroy
        if restaurant.destroy
          head :no_content
        else
          render json: errors(restaurant), status: 422
        end
      end

      private

      # Used For compound documents with fast_jsonapi
      def options
        @options ||= { include: %i[reviews] }
      end

      # Get all restaurants
      def restaurants
        #@restaurants ||= Restaurant.includes(reviews: :user).all
        @restaurants ||= Restaurant.all
      end

      # Get a specific restaurant
      def restaurant
        @restaurant ||= Restaurant.includes(reviews: :user).find_by(slug: params[:slug])
      end

      # Strong params
      def restaurant_params
        params.require(:name, :location, :image_url, :average_score)
      end

      # fast_jsonapi serializer
       def serializer(records, options = {})
        puts "here"
         RestaurantSerializer
         .new(@records, @options)
         .serialized_json
     end

      # Errors
      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end