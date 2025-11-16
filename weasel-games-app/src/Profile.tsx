import { useAuth0 } from "@auth0/auth0-react";
import { PhotoIcon } from "@heroicons/react/24/outline";

export function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user);

  if (isLoading) {
    return <div className="loading-text">Loading profile...</div>;
  };

  return (

    isAuthenticated && user ? (
      <>
      {/* Vanilla Block 
        <div
          id="profileDIV"
          className="flex mt-2">           
          <img 
            id="pfp"
            src={user.picture || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`} 
            alt={user.name || 'User'} 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`;
            }}
          />
          <div>
            <div id="profileName" >
              <h2>
                {user.name}
              </h2> 
            </div>
            <div id="profileEmail">
              e-mail:  
              {user.email}
            </div>
          </div>
        </div>
        */}

        
      {/* Form Block */}
        <form 
          className="flex justify-center mt-2"
          id="profileForm">
          <div>
            <div className="border-b border-gray-400 mx-5">
              <h2 className="font-semibold border-b border-gray-400">
                Account Details
              </h2>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <span>
                      Email: {user.email}
                    </span>
                    <label 
                      htmlFor="username" 
                      className="block text-sm/6 font-medium"
                      id="profileLabel">
                      {user.name}
                    </label>

                    <div className="mt-2">
                      <div
                        id="displayName"
                        className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1">
                          <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Display Name"
                          className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 focus:outline-none sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label 
                      id="profileLabel"
                      htmlFor="photo" 
                      className="block text-sm/6 font-medium">
                      Profile Picture
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">

                 {/* Put the user pfp here */}

                  <img 
                    id="pfp"
                    src={user.picture || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`} 
                    alt={user.name || 'User'} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`;
                    }}
                  />

                  {/*   <UserCircleIcon 
                        aria-hidden="true" 
                        className="size-12" 
                        id="photoIcon"/> */}

                {/* Form Button!!!! Need a backend! */}
                      <button
                        id="heroBtn"
                        className="btn"
                      >
                        Change
                      </button>
                    </div>

                    <div className="col-span-full">
                      <label
                        id="profileLabel" 
                        htmlFor="cover-photo" 
                        className="block text-sm/6 font-medium">
                        Change Profile Picture
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                        <div className="text-center">
                          <PhotoIcon 
                            id="photoIcon"
                            aria-hidden="true" 
                            className="mx-auto size-12" />
                          <div className="mt-4 flex text-sm/6">
                            <label
                              id="profileLabel"
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-transparent font-semibold"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs/5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              <div className="mt-6 flex items-center justify-end gap-x-6 mb-2">
                <button 
                  id="cancelBtn"
                  type="button" 
                  className="btn">
                  Cancel
                </button>
                <button
                  id="heroBtn"
                  type="submit"
                  className="btn"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

        </form>


            <div className="flex justify-center border-b border-gray-400 mx-25 mt-5">

                <h2 className="font-semibold border-gray-400">
                  Order History
                </h2>

            </div>
            <div
              id="orderHistory" 
              className="flex justify-center mt-2">
                <p>You haven't ordered anything yet.</p>
              </div>
    </>
    ) : null
  );
};
