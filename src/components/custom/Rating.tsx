import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
}

export default function Rating({ rating = 3 }: StarRatingProps) {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}