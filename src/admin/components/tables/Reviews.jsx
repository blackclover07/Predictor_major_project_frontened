import React, { useEffect, useState } from "react";
import { getReviews } from "../../../services/ReviewService";
import Pagination from "../Pagination";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [fake, setFake] = useState("");
  const [source, setSource] = useState("");

  const handleRefresh = async () => {
    setSearch("");
    setRating("");
    setSentiment("");
    setFake("");
    setSource("");

    await fetchReviews();
  };

  const fetchReviews = async (page = 1) => {
    try {
      setLoading(true);

      const data = await getReviews(page);

      setReviews(data.results ?? []);

      setCurrentPage(page);
      setTotalPages(Math.ceil(data.count / 20));
      setPrevious(data.previous);
      setNext(data.next);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews(1);
  }, []);

  useEffect(() => {
    let data = [...reviews];

    if (search) {
      data = data.filter(
        (r) =>
          r.product_name.toLowerCase().includes(search.toLowerCase()) ||
          r.review_text.toLowerCase().includes(search.toLowerCase()) ||
          r.reviewer_name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (rating) {
      data = data.filter((r) => r.rating === Number(rating));
    }

    if (sentiment) {
      data = data.filter((r) => r.sentiment_label === sentiment);
    }

    if (fake) {
      data = data.filter((r) => (fake === "fake" ? r.is_fake : !r.is_fake));
    }

    if (source) {
      data = data.filter((r) => r.source === source);
    }

    setFilteredReviews(data);
  }, [search, rating, sentiment, fake, source, reviews]);

  const sources = [...new Set(reviews.map((r) => r.source))];
  const categories = [...new Set(reviews.map((p) => p.category))];
  const subcategories = [...new Set(reviews.map((p) => p.subcategory))];
  const brands = [...new Set(reviews.map((p) => p.brand))];

  return (
    <div className="min-h-screen bg-[#090b0e] text-white p-8 w-full">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Reviews Management</h1>
          <p className="text-sm text-gray-400">
            Manage all reviews in the catalog.
          </p>
        </div>

        <button className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500 text-sm font-semibold">
          <i className="ri-add-line mr-1"></i>
          Add Reviews
        </button>
      </header>

      {/* Filters */}

      <div className="bg-[#0f1216] border border-gray-800 rounded-2xl p-4 mb-6 flex flex-wrap gap-3 items-center">
        <input
          type="text"
          placeholder="Search review..."
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500 w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-3 py-2"
        >
          <option value="">All Ratings</option>
          <option value="5">★★★★★</option>
          <option value="4">★★★★☆</option>
          <option value="3">★★★☆☆</option>
          <option value="2">★★☆☆☆</option>
          <option value="1">★☆☆☆☆</option>
        </select>

        <select
          value={sentiment}
          onChange={(e) => setSentiment(e.target.value)}
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-3 py-2"
        >
          <option value="">All Sentiments</option>
          <option value="POSITIVE">Positive</option>
          <option value="NEUTRAL">Neutral</option>
          <option value="NEGATIVE">Negative</option>
        </select>

        <select
          value={fake}
          onChange={(e) => setFake(e.target.value)}
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-3 py-2"
        >
          <option value="">All Reviews</option>
          <option value="fake">Fake</option>
          <option value="real">Real</option>
        </select>

        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-3 py-2"
        >
          <option value="">All Sources</option>

          {sources.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          onClick={handleRefresh}
          disabled={loading}
          className="ml-auto bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          <i className={`ri-refresh-line ${loading ? "animate-spin" : ""}`}></i>
        </button>
      </div>
      {/* Table */}

      <div className="bg-[#0f1216] border border-gray-800 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-gray-800 text-gray-500 text-xs uppercase">
            <tr>
              <th className="p-4 text-left">Product</th>

              <th className="p-4 text-left">Review</th>

              <th className="p-4 text-center">Rating</th>

              <th className="p-4 text-center">Sentiment</th>

              <th className="p-4 text-center">Fake</th>

              <th className="p-4 text-center">Source</th>

              <th className="p-4 text-center">Reviewer</th>

              <th className="p-4 text-center">Date</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="py-20">
                  <div className="flex flex-col items-center">
                    <div className="relative h-20 w-20 flex items-center justify-center">
                      <div className="absolute inset-0"></div>

                      <div className="relative h-20 w-20 flex items-center justify-center ">
                        <i className="ri-ai-generate text-5xl text-cyan-400 animate-pulse"></i>
                      </div>
                    </div>
                    <h2 className="mt-1 text-xl font-semibold text-white">
                      Synchronizing Reviews
                    </h2>

                    <p className="mt-2 text-sm text-gray-500 max-w-md text-center">
                      Collecting customer feedback and preparing sentiment
                      predictions...
                    </p>
                  </div>
                </td>
              </tr>
            ) : filteredReviews.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-20">
                  <div className="flex flex-col items-center">
                    <div className="relative h-20 w-20 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping"></div>

                      <div className="relative h-20 w-20 rounded-full bg-[#15191f] border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.25)]">
                        <i className="ri-file-search-line text-4xl text-blue-400"></i>
                      </div>
                    </div>
                    <h2 className="mt-6 text-xl font-semibold text-white">
                      No Matching Reviews
                    </h2>

                    <p className="mt-2 text-sm text-gray-500 max-w-md text-center">
                      No reviews matched the current search criteria. Modify
                      your filters or refresh the dataset.
                    </p>
                    <button
                      onClick={handleRefresh}
                      className="mt-6 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium"
                    >
                      <i className="ri-refresh-line mr-2"></i>
                      Reset Filters
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              filteredReviews.map((review) => (
                <tr
                  key={review.id}
                  className="border-b border-gray-900 hover:bg-[#15191f]"
                >
                  <td className="p-4 font-semibold">{review.product_name}</td>

                  <td className="p-4 max-w-sm truncate">
                    {review.review_text}
                  </td>

                  <td className="p-4 text-center">{review.rating} ⭐</td>

                  <td className="p-4 text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold uppercase

                            ${
                              review.sentiment_label.toLowerCase() ===
                              "positive"
                                ? "bg-green-500/20 text-green-400"
                                : review.sentiment_label.toLowerCase() ===
                                    "negative"
                                  ? "bg-red-500/20 text-red-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                            }`}
                    >
                      {review.sentiment_label}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    {review.is_fake ? (
                      <i className="ri-close-circle-line text-red-400 text-xl" />
                    ) : (
                      <i className="ri-checkbox-circle-line text-emerald-400 text-xl" />
                    )}
                  </td>

                  <td className="p-4 text-center uppercase">{review.source}</td>

                  <td className="p-4 text-center">{review.reviewer_name}</td>

                  <td className="p-4 text-center">{review.review_date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previous={previous}
        next={next}
        onPageChange={fetchReviews}
      />
    </div>
  );
};

export default Reviews;
