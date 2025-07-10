export default function NoItem({ from }) {
  const backPath = from === "brand" ? "/brands" : "/categories";

  const handleBack = () => {
    // في التطبيق الحقيقي، يمكنك استخدام window.history.back() أو التنقل المناسب
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* SVG Container */}
        <div className="mb-8 flex justify-center">
          <svg
            className="w-auto max-w-[16rem] h-40 drop-shadow-lg"
            aria-hidden="true"
            width="603"
            height="642"
            viewBox="0 0 603 642"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31 106C31 102.686 33.6863 100 37 100H578C581.314 100 584 102.686 584 106V459C584 462.314 581.314 465 578 465H37C33.6863 465 31 462.314 31 459V106Z" fill="#dcfce7"/>
            <path d="M31 106C31 102.686 33.6863 100 37 100H578C581.314 100 584 102.686 584 106V459C584 462.314 581.314 465 578 465H37C33.6863 465 31 462.314 31 459V106Z" fill="url(#paint0_linear_204_2106)"/>
            <path d="M31 106C31 102.686 33.6863 100 37 100H578C581.314 100 584 102.686 584 106V459C584 462.314 581.314 465 578 465H37C33.6863 465 31 462.314 31 459V106Z" fill="url(#paint1_linear_204_2106)"/>
            <path d="M428 372.5L217 161.5H204.5L428 385V372.5Z" fill="url(#paint2_linear_204_2106)" fillOpacity="0.5"/>
            <path d="M428 259.5L329.5 161H355.5L428 233.5V259.5Z" fill="url(#paint3_linear_204_2106)" fillOpacity="0.5"/>
            <path d="M385 465L187 267V306L346 465H385Z" fill="url(#paint4_linear_204_2106)" fillOpacity="0.5"/>
            <path d="M282 465L187 370V384L268 465H282Z" fill="url(#paint5_linear_204_2106)" fillOpacity="0.5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M94.7967 161L170 236.171V216.329L114.647 161H94.7967ZM31 193.007V183.468L170 322.408V331.947L31 193.007ZM31 316.639V286.875L137.17 393H107.394L31 316.639ZM31 376.165V365.481L58.5311 393H47.8423L31 376.165Z" fill="url(#paint6_linear_204_2106)" fillOpacity="0.5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M573.647 161H553.797L584 191.19V171.348L573.647 161ZM584 277.427L467.905 161.382H458.361L584 286.967V277.427ZM584 380.835L445 241.895V271.658L566.394 393H581C582.657 393 584 391.657 584 390V380.835ZM517.531 393L445 320.5V331.184L506.842 393H517.531Z" fill="url(#paint7_linear_204_2106)" fillOpacity="0.5"/>
            <path d="M31 393L170 393L170 309L31 309L31 393Z" fill="#F9FAFB" fillOpacity="0.5"/>
            <path d="M445 393L584 393L584 309L445 309L445 393Z" fill="#F9FAFB" fillOpacity="0.5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M448 162H584V160H448C445.791 160 444 161.791 444 164V390C444 392.209 445.791 394 448 394H584V392H448C446.895 392 446 391.105 446 390V164C446 162.895 446.895 162 448 162Z" fill="#bbf7d0"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M190 162C188.895 162 188 162.895 188 164V465H186V164C186 161.791 187.791 160 190 160H425C427.209 160 429 161.791 429 164V465H427V164C427 162.895 426.105 162 425 162H190Z" fill="#bbf7d0"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M306 465V161H308V465H306Z" fill="#bbf7d0"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M167 162H31V160H167C169.209 160 171 161.791 171 164V390C171 392.209 169.209 394 167 394H31V392H167C168.105 392 169 391.105 169 390V164C169 162.895 168.105 162 167 162Z" fill="#bbf7d0"/>
            <path d="M60 237C60 214.909 77.9086 197 100 197C122.091 197 140 214.909 140 237C140 259.091 122.091 277 100 277C77.9086 277 60 259.091 60 237Z" fill="white" fillOpacity="0.6"/>
            <path d="M474 237C474 214.909 491.909 197 514 197C536.091 197 554 214.909 554 237C554 259.091 536.091 277 514 277C491.909 277 474 259.091 474 237Z" fill="white" fillOpacity="0.6"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 117L19.9669 19H583.033L603 117C597.338 120.833 582.117 128.5 566.53 128.5C551.208 128.5 539.781 121.092 535.758 117.199C529.875 121.092 514.908 128.5 499.586 128.5C484.264 128.5 472.836 121.092 468.814 117.199C462.931 121.092 447.963 128.5 432.641 128.5C417.319 128.5 405.892 121.092 401.869 117.199C395.986 121.092 381.019 128.5 365.697 128.5C350.375 128.5 338.947 121.092 334.925 117.199C329.042 121.092 314.074 128.5 298.752 128.5C283.43 128.5 272.003 121.092 267.98 117.199C262.097 121.092 247.13 128.5 231.808 128.5C216.486 128.5 205.058 121.092 201.036 117.199C195.153 121.092 180.185 128.5 164.863 128.5C149.541 128.5 138.114 121.092 134.091 117.199C128.208 121.092 113.241 128.5 97.9188 128.5C82.597 128.5 71.1692 121.092 67.1467 117.199C61.2639 121.092 46.2961 128.5 30.9743 128.5C15.3872 128.5 3.83016 120.833 0 117Z" fill="#dcfce7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 117L19.9669 19H583.033L603 117C597.338 120.833 582.117 128.5 566.53 128.5C551.208 128.5 539.781 121.092 535.758 117.199C529.875 121.092 514.908 128.5 499.586 128.5C484.264 128.5 472.836 121.092 468.814 117.199C462.931 121.092 447.963 128.5 432.641 128.5C417.319 128.5 405.892 121.092 401.869 117.199C395.986 121.092 381.019 128.5 365.697 128.5C350.375 128.5 338.947 121.092 334.925 117.199C329.042 121.092 314.074 128.5 298.752 128.5C283.43 128.5 272.003 121.092 267.98 117.199C262.097 121.092 247.13 128.5 231.808 128.5C216.486 128.5 205.058 121.092 201.036 117.199C195.153 121.092 180.185 128.5 164.863 128.5C149.541 128.5 138.114 121.092 134.091 117.199C128.208 121.092 113.241 128.5 97.9188 128.5C82.597 128.5 71.1692 121.092 67.1467 117.199C61.2639 121.092 46.2961 128.5 30.9743 128.5C15.3872 128.5 3.83016 120.833 0 117Z" fill="url(#paint8_linear_204_2106)"/>
            <path d="M20 3C20 1.34315 21.3431 0 23 0H580C581.657 0 583 1.34315 583 3V19H20V3Z" fill="#dcfce7"/>
            <path d="M35 9.5C35 11.433 33.433 13 31.5 13C29.567 13 28 11.433 28 9.5C28 7.567 29.567 6 31.5 6C33.433 6 35 7.567 35 9.5Z" fill="#bbf7d0"/>
            <path d="M45 9.5C45 11.433 43.433 13 41.5 13C39.567 13 38 11.433 38 9.5C38 7.567 39.567 6 41.5 6C43.433 6 45 7.567 45 9.5Z" fill="#059669"/>
            <path d="M55 9.5C55 11.433 53.433 13 51.5 13C49.567 13 48 11.433 48 9.5C48 7.567 49.567 6 51.5 6C53.433 6 55 7.567 55 9.5Z" fill="#bbf7d0"/>
            <defs>
              <linearGradient id="paint0_linear_204_2106" x1="307.5" y1="505.614" x2="307.5" y2="166.987" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9FAFB"/>
                <stop offset="1" stopColor="#F9FAFB" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_204_2106" x1="442.962" y1="-362.579" x2="442.962" y2="362.673" gradientUnits="userSpaceOnUse">
                <stop stopColor="#86efac"/>
                <stop offset="0.830726" stopColor="#86efac" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint2_linear_204_2106" x1="138.5" y1="167" x2="501" y2="556" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#F9FAFB" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint3_linear_204_2106" x1="138.5" y1="167" x2="501" y2="556" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#F9FAFB" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint4_linear_204_2106" x1="138.5" y1="167" x2="501" y2="556" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#F9FAFB" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint5_linear_204_2106" x1="138.5" y1="167" x2="501" y2="556" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#F9FAFB" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint6_linear_204_2106" x1="3.02697" y1="165.579" x2="274.385" y2="385.652" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#F9FAFB" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint7_linear_204_2106" x1="417.027" y1="165.579" x2="688.385" y2="385.652" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#F9FAFB" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint8_linear_204_2106" x1="301.5" y1="129" x2="301.5" y2="59" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9FAFB"/>
                <stop offset="1" stopColor="#F9FAFB" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            NO ITEMS!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Sorry, there is no item in this section
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}