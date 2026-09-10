-- CreateEnum
CREATE TYPE "PlatformType" AS ENUM ('PC', 'PLAYSTATION', 'XBOX');

-- CreateEnum
CREATE TYPE "TournamentMode" AS ENUM ('ON_SITE', 'REMOTE');

-- CreateEnum
CREATE TYPE "TournamentScope" AS ENUM ('CAFE_INTERNAL', 'CAFE_VS_CAFE', 'CITY_VS_CITY');

-- CreateEnum
CREATE TYPE "TournamentStatus" AS ENUM ('DRAFT', 'REGISTRATION_OPEN', 'ONGOING', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "BracketFormat" AS ENUM ('SINGLE_ELIMINATION', 'ROUND_ROBIN', 'POINTS_LEAGUE');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "LeaderboardScope" AS ENUM ('CAFE', 'CITY', 'STATE', 'GLOBAL');
