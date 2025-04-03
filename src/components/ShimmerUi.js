const ShimmerUi = () => {
    return (
        <div className="shimmer-container">
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         <ShimmerCard/>
         
        </div>
    )
}

const ShimmerCard = () => {
    return (
        <div className = "shimmer-card">
                <div className = "image-shimmer"></div>
                <div className = "shimmer-content"></div>
                <div className = "shimmer-content"></div>
         </div>
    )
}

export default ShimmerUi;