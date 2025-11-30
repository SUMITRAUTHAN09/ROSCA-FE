"use client";

<<<<<<< HEAD
import { NAVIGATION_ROUTES } from "@/app/constant";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { toast } from "sonner";
=======
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { NAVIGATION_ROUTES } from '@/app/constant';
import { toast } from 'sonner';
>>>>>>> 05596742aad24ad40e030264ed65ebec9567041e

function CallbackContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const processCallback = async () => {
<<<<<<< HEAD
      const token = searchParams.get("token");
      const userParam = searchParams.get("user");
      const error = searchParams.get("error");

      if (error) {
        console.error("Authentication error:", error);
        toast.error("Authentication failed. Please try again.");

=======
      const token = searchParams.get('token');
      const userParam = searchParams.get('user');
      const error = searchParams.get('error');

      if (error) {
        console.error('Authentication error:', error);
        toast.error('Authentication failed. Please try again.');
        
>>>>>>> 05596742aad24ad40e030264ed65ebec9567041e
        setTimeout(() => {
          window.location.href = `${NAVIGATION_ROUTES.SIGNUP}?error=${error}`;
        }, 1500);
        return;
      }

      if (token && userParam) {
        try {
          // Decode user data from URL parameter
          const userData = JSON.parse(decodeURIComponent(userParam));
<<<<<<< HEAD

          console.log("✅ Received user data:", userData);

          // Store auth data exactly like manual login does
          localStorage.setItem("authToken", token);
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("userLoggedIn", "true");

          toast.success(`Welcome, ${userData.firstName}!`);

=======
          
          console.log('✅ Received user data:', userData);
          
          // Store auth data exactly like manual login does
          localStorage.setItem('authToken', token);
          localStorage.setItem('user', JSON.stringify(userData));
          localStorage.setItem('userLoggedIn', 'true');
          
          toast.success(`Welcome, ${userData.firstName}!`);
          
<<<<<<< HEAD
>>>>>>> 05596742aad24ad40e030264ed65ebec9567041e
          // Force full page reload to reinitialize auth state
          setTimeout(() => {
            window.location.href = NAVIGATION_ROUTES.UIPAGE;
          }, 800);
<<<<<<< HEAD
        } catch (err) {
          console.error("Error processing callback:", err);
          toast.error("Failed to complete sign in");

=======
=======
          // Check if user has already selected a type
          if (userData.userType) {
            // User already has a type, go directly to UIPAGE
            setTimeout(() => {
              window.location.href = NAVIGATION_ROUTES.UIPAGE;
            }, 800);
          } else {
            // New user or user without type, go to user-type selection
            setTimeout(() => {
              window.location.href = NAVIGATION_ROUTES.USER_TYPE;
            }, 800);
          }
>>>>>>> 6c780c1639deec705f3ec3a7003a5f6173f346d5
          
        } catch (err) {
          console.error('Error processing callback:', err);
          toast.error('Failed to complete sign in');
          
>>>>>>> 05596742aad24ad40e030264ed65ebec9567041e
          setTimeout(() => {
            window.location.href = `${NAVIGATION_ROUTES.SIGNUP}?error=callback_failed`;
          }, 1500);
        }
      } else {
<<<<<<< HEAD
        console.warn("No token or user data received in callback");
        toast.error("Authentication data missing");
=======
        console.warn('No token or user data received in callback');
        toast.error('Authentication data missing');
>>>>>>> 05596742aad24ad40e030264ed65ebec9567041e
        window.location.href = NAVIGATION_ROUTES.SIGNUP;
      }
    };

    processCallback();
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-300 via-pink-400 to-purple-600">
      <div className="text-center bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
<<<<<<< HEAD
        <p className="text-xl font-semibold text-gray-800">
          Completing sign in...
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Please wait while we set up your account
        </p>
=======
        <p className="text-xl font-semibold text-gray-800">Completing sign in...</p>
        <p className="text-sm text-gray-600 mt-2">Please wait while we set up your account</p>
>>>>>>> 05596742aad24ad40e030264ed65ebec9567041e
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-300 via-pink-400 to-purple-600">
      <div className="text-center bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
        <p className="text-xl font-semibold text-gray-800">Loading...</p>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CallbackContent />
    </Suspense>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 05596742aad24ad40e030264ed65ebec9567041e
