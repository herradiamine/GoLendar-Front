'use client'

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '@/store/userSlice';
import type { RootState, AppDispatch } from '@/store/index';

interface SessionGuardProps {
    children: React.ReactNode;
}

export default function SessionGuard({ children }: SessionGuardProps) {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch<AppDispatch>();
    const { status, response } = useSelector((state: RootState) => state.user);

    // Pages qui ne nécessitent pas d'authentification
    const publicPages = ['/login', '/register'];
    const isPublicPage = publicPages.includes(pathname);

    useEffect(() => {
        // Vérifier si un token existe dans le localStorage
        const sessionToken = localStorage.getItem('session_token');
        
        if (!sessionToken) {
            // Pas de token
            if (!isPublicPage) {
                // Rediriger vers la page de connexion si on n'est pas sur une page publique
                router.push('/login');
            }
            return;
        }

        // Si on n'a pas encore récupéré le profil et qu'on a un token
        if (status === 'idle') {
            dispatch(fetchUserProfile());
        }
    }, [dispatch, router, status, isPublicPage, pathname]);

    // Gérer les redirections selon l'état de la session
    useEffect(() => {
        if (status === 'succeeded') {
            if (response.success) {
                // Utilisateur authentifié
                if (isPublicPage) {
                    // Rediriger vers le dashboard si on est sur une page publique
                    router.push('/dashboard');
                }
            } else {
                // Échec d'authentification
                if (!isPublicPage) {
                    router.push('/login');
                }
            }
        } else if (status === 'failed') {
            // Échec de récupération du profil
            if (!isPublicPage) {
                router.push('/login');
            }
        }
    }, [status, response.success, isPublicPage, router]);

    // Afficher un loader pendant le chargement sur les pages privées
    if (status === 'loading' && !isPublicPage) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
        );
    }

    // Pour les pages publiques, toujours afficher le contenu
    if (isPublicPage) {
        return <>{children}</>;
    }

    // Pour les pages privées, afficher seulement si authentifié
    if (status === 'succeeded' && response.success) {
        return <>{children}</>;
    }

    // Par défaut, ne rien afficher (en attente ou redirection en cours)
    return null;
} 